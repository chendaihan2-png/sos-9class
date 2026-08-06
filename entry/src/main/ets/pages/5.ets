import { router } from  '@kit.ArkUI';
@Entry
@Component
struct rd {
  @State message: string = 'Hello World';
  build() {
    Column() {
      Text("你带来了帽子，准备给你的同桌带上")
        .backgroundColor(Color.Pink)
        .fontSize(20)
        .borderRadius(10)
        .padding(5)
      Button("点击前往下一章")
        .onClick(()=>{
          router.pushUrl(
            {
              url:"pages/6"
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
    .backgroundImage($r('app.media.5'))
    .backgroundImagePosition(Alignment.Center)
    .backgroundImageSize(ImageSize.Cover)
    .width('100%')
    .justifyContent(FlexAlign.End)
    .padding(60)
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])

  }
}