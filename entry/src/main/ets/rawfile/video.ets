// xxx.ets
// ...
@Entry
@Component
export struct LocalVideo {
  private controller: VideoController = new VideoController();
  // $rawfile('videoTest.mp4')需要替换为开发者所需的影像资源文件
  private innerResource: Resource = $rawfile('wt.mp4');

  build() {
    Column() {
      Video({
        src: this.innerResource,  // 设置视频源
        controller: this.controller // 设置视频控制器，可以控制视频的播放状态
      })
    }
  }
}