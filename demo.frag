#ifdef GL_ES
precision mediump float;
#endif
#iChannel1 "https://66.media.tumblr.com/tumblr_mcmeonhR1e1ridypxo1_500.jpg"

float random(vec2 x) {
  return fract(sin(dot(x, vec2(10, 100))) * 10000.0);
}

void main() {
  // float gap = smoothstep(-0.01, 0.01, iTime);
  float gap = sin(iTime * 3.0) / 50.0;
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec4 color1 = texture(iChannel1, uv);
  vec4 color2 = texture(iChannel1, uv + gap);
  color1.r = color2.r;
  vec4 color3 = texture(iChannel1, uv + gap + 0.01);
  color1.g = color3.g;
  // vec4 color = mix(color1, color2, 0.5);
  gl_FragColor = color1;
}