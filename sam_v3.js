auto.waitFor()

var delivery_time

const start = () => {
    // console.show()
    try {
        // console.log(className("android.widget.ImageView").findOne().text('今日订单已达上限'))
        // toast('开始了')
        // console.log('开始了')
        if (textStartsWith('结算').exists()){
            // toast('结算')
            console.log('结算')
            id("cart_btn_settle_accounts").findOne().click()
            sleep(500)
            start()
        }else if (textStartsWith('重试').exists()){
            // toast('重试')
            console.log('重试')
            textStartsWith('重试').findOne().click()
            sleep(500)
            start()
        } 
        // else if (text("今日订单已达上限").exists()){
        else if (className("android.widget.TextView").text('今日订单已达上限').exists()){
            // toast('测试')
            console.log('今日订单已达上限')
            sleep(1000)
            let b =id("back").findOne().bounds()
            click(b.centerX(),b.centerY()) 
            
            // click(36,187)
            // console.log(id("back").findOne())
            // className("android.widget.ImageView").click()
            // back()
            // id("back").findOne().click()
            start()
        }
        else if (className("android.widget.TextView").text('请选择配送时间').exists()){
            // toast('重试')
            console.log('请选择配送时间')
            textStartsWith('请选择配送时间').findOne().click()
            sleep(600)
            start()
        } 
        else {
            // toast('等待操作')
            console.log('等待操作')
            sleep(1000)
            // exit()
            start()
        }

    } catch (error) {
        console.log(error)
        toast(error)
        sleep(1000)
        start()
    }
    
}
start()
