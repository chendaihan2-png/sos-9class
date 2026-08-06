import { router } from '@kit.ArkUI';
@Entry
@Component
struct nd {
  @State message: string = 'Hello World';
  build() {
    Column() {
      Text("这是你的攻略对象，他现在忧郁了，你快去安慰她")
        .backgroundColor(Color.Pink)
        .fontSize(20)
        .borderRadius(10)
        .padding(5)
      Button("点击前往下一章")
        .backgroundColor(Color.Pink)
        .onClick(()=>{
          router.pushUrl({
            url: 'pages/3',
            params: {
              info: '来自首页的数据'
            }
          });
        })
        .fontSize(20)
        .borderRadius(10)
        .margin({
          top:10
        })
    }
    .height('100%')
    .backgroundImage($r('app.media.2'))
    .backgroundImagePosition(Alignment.Center)
    .backgroundImageSize(ImageSize.Cover)
    .padding(60)
    .width('100%')
    .justifyContent(FlexAlign.End)
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])
  }
}