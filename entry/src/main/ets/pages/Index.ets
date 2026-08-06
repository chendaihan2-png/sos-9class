import { router } from '@kit.ArkUI';

@Entry
@Component
struct Index {

  build() {

    Column() {
      Text("救命")
        .backgroundColor(Color.Pink)
        .fontSize(50)
        .borderRadius(10)
        .fontColor(Color.White)
        .padding(10)
      Text("救我被9班同学包围了")
        .fontSize(50)
        .borderRadius(10)
        .fontColor(Color.White)
        .padding(5)
        .backgroundColor(Color.Pink)
        .margin({ top:10 })
        .padding(10)
      Button("点击开始游戏")
        .onClick(()=>{
          router.pushUrl({

            url: 'pages/2',
            params: {
              info: '来自首页的数据'
            }
          });

        })
        .backgroundColor("#d2ffbce8")
        .fontSize(20)
        .padding(10)
        .fontSize(37)
        .borderRadius(50)
        .margin({
          top:10
        })
      Column({
      })
    }
    .height('100%')
    .backgroundImage($r('app.media.1'))
    .backgroundImagePosition(Alignment.Start)
    .backgroundImageSize(ImageSize.Cover)
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.Center)
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])
  }
}