from datetime import datetime

def main():
    future = datetime.strptime('2022-03-26 00:00:00','%Y-%m-%d %H:%M:%S')
    now = datetime.now()
    # 求时间差
    delta = future - now
    print('今天是:',now.strftime('%Y-%m-%d %H:%M:%S'))
    print("距离 2022-03-26 \"省考\" 还剩下：%d天"%delta.days)



if __name__ == "__main__":
    main()