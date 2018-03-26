import { UVMapping } from '../constants.js';
import { MirroredRepeatWrapping, ClampToEdgeWrapping, RepeatWrapping, LinearEncoding, UnsignedByteType, RGBAFormat, LinearMipMapLinearFilter, LinearFilter } from '../constants.js';
import { Vector2 } from '../math/Vector2.js';

function TextureParams(options) {

  options = options || {};

  this.mapping = options.mapping !== undefined ? options.mapping : TextureParams.DEFAULT_MAPPING;

  this.wrapS = options.wrapS !== undefined ? options.wrapS : ClampToEdgeWrapping;
  this.wrapT = options.wrapT !== undefined ? options.wrapT : ClampToEdgeWrapping;

  this.magFilter = options.magFilter !== undefined ? options.magFilter : LinearFilter;
  this.minFilter = options.minFilter !== undefined ? options.minFilter : LinearMipMapLinearFilter;

  this.anisotropy = options.anisotropy !== undefined ? options.anisotropy : 1;

  this.format = options.format !== undefined ? options.format : RGBAFormat;
  this.type = options.type !== undefined ? options.type : UnsignedByteType;

  this.encoding = options.encoding !== undefined ? options.encoding : LinearEncoding;

  this.offset = new Vector2(0, 0);
  if (options.offset !== undefined) this.offset.copy(options.offset);
  this.repeat = new Vector2(1, 1);
  if (options.repeat !== undefined) this.repeat.copy(options.repeat);
  this.center = new Vector2(0, 0);
  if (options.center !== undefined) this.center.copy(options.center);

  this.rotation = 0;

  this.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : true;

};

TextureParams.prototype = {

  constructor: TextureParams,

  clone: function (params) {

    if (params === undefined) {

      return new TextureParams(this);

    } else {

      TextureParams.call(params, this);

      return params;

    }

  }

};

TextureParams.DEFAULT_MAPPING = UVMapping;

export { TextureParams };
