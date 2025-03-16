import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import {  useState } from "react"
import classNames from "classnames"
import dayjs from "dayjs"

const Month = () => {
   // 控制时间选择器打开关闭
   const [dateVisible, setDateVisible] = useState(false)

   const [currentMonth, setCurrentMonth] = useState(() => {
    return dayjs().format('YYYY-MM')
})

   // 时间选择框确实事件
   const dateConfirm = (date) => {
    setDateVisible(false)
    const month = dayjs(date).format('YYYY-MM')
    setCurrentMonth(month)
  }



  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
            {currentMonth} 账单
            </span>
            <span className={classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={new Date()}
            OnCancel={() => setDateVisible(false)}
            onConfirm={dateConfirm}
            onClose={() => setDateVisible(false)}
          />
        </div>
      </div>
    </div >
  )
}

export default Month