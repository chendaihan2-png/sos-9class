import { router } from  '@kit.ArkUI';
@Entry
@Component
struct rd {
  build() {
    Column() {
      Text("感谢您游玩「救命，我被9班同学包围了」")
        .backgroundColor(Color.Pink)
        .fontSize(20)
        .borderRadius(10)
        .padding(5)
      Button("别走，还有第二关")
        .onClick(()=>{
          router.pushUrl({
            url:"rawfile/video"
          })

        })
    }
    .height('100%')
    .width('100%')
    .backgroundColor(Color.Pink)
    .justifyContent(FlexAlign.Center)
    .padding(60)
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])

  }
}