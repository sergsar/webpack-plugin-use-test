import * as webpack from 'webpack';

export class CustomWebpackTestPlugin {
  public apply(compiler: webpack.Compiler): void {
    console.log('log apply');
  }
}
