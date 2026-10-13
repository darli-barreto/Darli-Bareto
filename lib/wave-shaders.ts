export const vertexShader = `
  attribute vec2 position;
  varying vec2 uv;
  void main() { uv = position * .5 + .5; gl_Position = vec4(position, 0., 1.); }
`;

export const fragmentShader = `
  precision mediump float;
  uniform sampler2D picture;
  uniform vec2 resolution;
  uniform float time;
  varying vec2 uv;
  void main() {
    vec2 p = vec2(uv.x, 1. - uv.y);
    float aspect = resolution.x / resolution.y;
    float imageAspect = 1600. / 1080.;
    vec2 fit = vec2(min(1., aspect / imageAspect), min(1., imageAspect / aspect));
    p = (p - .5) * fit * .95 + .5;
    float envelope = sin(p.y * 3.14159);
    p.y += sin(p.x * 9. + time * .36) * .018 * envelope;
    p.y += sin(p.x * 17. - time * .23) * .007 * envelope;
    p.x += sin(p.y * 7. + time * .19) * .008;
    gl_FragColor = texture2D(picture, p);
  }
`;
