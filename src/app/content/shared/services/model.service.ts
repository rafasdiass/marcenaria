import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private loader: THREE.ObjectLoader;
  private modelCache: Map<string, THREE.Object3D>;

  constructor() {
    this.loader = new THREE.ObjectLoader();
    this.modelCache = new Map<string, THREE.Object3D>();
  }

  // Método para carregar um modelo 3D de um arquivo .obj ou outro formato suportado pelo THREE.js
  loadModel(modelPath: string): Promise<THREE.Object3D> {
    if (this.modelCache.has(modelPath)) {
      // Se o modelo já está em cache, retornamos ele diretamente
      return Promise.resolve(this.modelCache.get(modelPath)!);
    }

    return new Promise((resolve, reject) => {
      this.loader.load(
        modelPath,
        (model) => {
          this.modelCache.set(modelPath, model);
          resolve(model);
        },
        undefined,
        (error) => reject(error)
      );
    });
  }

  // Método para obter um modelo diretamente do cache, se disponível
  getModelFromCache(modelPath: string): THREE.Object3D | undefined {
    return this.modelCache.get(modelPath);
  }

  // Método para liberar recursos de um modelo específico
  disposeModel(modelPath: string): void {
    const model = this.modelCache.get(modelPath);
    if (model) {
      model.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      this.modelCache.delete(modelPath);
    }
  }
}
