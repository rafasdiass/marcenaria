import { Component, Input, OnChanges } from '@angular/core';
import { ModelService } from '../../../../shared/services/model.service';
import { ProductModel } from '../../../../shared/models/product-model';
import * as THREE from 'three';

@Component({
  selector: 'app-model-viewer',
  standalone: true,
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.scss']
})
export class ModelViewerComponent implements OnChanges {
  @Input() product: ProductModel | undefined;
  @Input() dimensions: { height: number, width: number, depth: number } = { height: 100, width: 100, depth: 100 };

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  constructor(private modelService: ModelService) {}

  ngOnChanges(): void {
    if (this.product) {
      this.loadAndRenderModel();
    }
  }

  private loadAndRenderModel(): void {
    this.modelService.loadModel(this.product!.modelPath).then(model => {
      this.scene.clear();
      model.scale.set(this.dimensions.width, this.dimensions.height, this.dimensions.depth);
      this.scene.add(model);
      this.animate();
    });
  }

  private initializeThreeJs(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threeJsContainer')?.appendChild(this.renderer.domElement);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
}
