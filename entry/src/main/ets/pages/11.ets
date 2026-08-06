import { router } from  '@kit.ArkUI';
@Entry
@Component
struct rd {
  @State message: string = 'Hello World';
  build() {
    Column() {
      Text("这人是个老傻子，又sb又爱装，他现在正在恶龙咆哮呢")
        .backgroundColor(Color.Pink)
        .fontSize(20)
        .borderRadius(10)
        .padding(5)
      Button("恭喜！您已成功通关")
        .onClick(()=>{
          router.pushUrl(
            {
              url:"pages/end"
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
    .backgroundImage($r('app.media.11'))
    .backgroundImagePosition(Alignment.Center)
    .backgroundImageSize(ImageSize.Cover)
    .width('100%')
    .justifyContent(FlexAlign.End)
    .padding(60)
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])

  }
}