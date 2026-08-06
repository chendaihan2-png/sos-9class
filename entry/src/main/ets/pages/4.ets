import { router } from  '@kit.ArkUI';
@Entry
@Component
struct rd {
  @State message: string = 'Hello World';
  build() {
    Column() {
      Text("你现在正在把帽子放在他的头上看效果")
        .backgroundColor(Color.Pink)
        .fontSize(20)
        .borderRadius(10)
        .padding(5)
      Button("点击前往下一章")
        .onClick(()=>{
          router.pushUrl(
            {
              url:"pages/5"
            }
          )
        })
        .backgroundColor(Color.Pink)
        .fontSize(20)
        .borderRadius(10)
        .margin({
          top:10
        })
    }
    .height('100%')
    .backgroundImage($r('app.media.4'))
    .backgroundImagePosition(Alignment.Center)
    .backgroundImageSize(ImageSize.Cover)
    .width('100%')
    .justifyContent(FlexAlign.End)
    .padding(60)
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])

  }
}