import * as THREE from 'three'
import { ShapeType } from '../../functional/types'
import { TransformationControl } from './control/transformation_control'

/**
 * Base shape class
 */
export abstract class Shape3D extends THREE.Object3D {
  /** id */
  protected _id: number
  /** shape state */
  protected _shape: ShapeType | null
  /** whether highlighted */
  protected _highlighted: boolean

  constructor () {
    super()
    this._id = -1
    this._shape = null
    this._highlighted = false
  }

  /** Get shape id */
  public get id (): number {
    return this._id
  }

  /** return shape type */
  public abstract get typeName (): string

  /** update parameters */
  public updateState (
    shape: ShapeType, id: number, _activeCamera?: THREE.Camera
  ) {
    this._shape = shape
    this._id = id
  }

  /** Convert shape to state representation */
  public abstract toState (): ShapeType

  /** function for setting highlight status */
  public abstract setHighlighted (intersection?: THREE.Intersection): void
}
