let 開始時間 = 0
let 結束時間 = 0
basic.forever(function () {
    // 白線上
    // 停下來
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.stop(BBStopMode.Brake)
        bitbot.rotate(BBRobotDirection.Right, 30)
        開始時間 = input.runningTime()
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1 && input.runningTime() - 開始時間 <= 400 || input.runningTime() - 開始時間 > 400) {
            bitbot.rotate(BBRobotDirection.Right, 30)
        }
        結束時間 = input.runningTime() - 開始時間
    }
    // 右邊
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotate(BBRobotDirection.Left, 15)
    }
    // 左邊
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 115)
    }
    // 黑線上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 60)
    }
})
