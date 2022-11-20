import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] =[
  {
    label: '栏目1',
    key: '/page1',
    icon: <PieChartOutlined></PieChartOutlined>
  },
  {
    label: '栏目2',
    key: '/page2',
    icon: <DesktopOutlined></DesktopOutlined>
  },
  {
    label: '栏目3',
    key: '/page3',
    icon: <UserOutlined></UserOutlined>,
    children: [
        {
          label: '页面301',
          key: '/page3/page301',
          icon: <DesktopOutlined></DesktopOutlined>
        },
        {
            label: '页面302',
            key: '/page3/page302',
            icon: <DesktopOutlined></DesktopOutlined>
        }
    ]
  },
  {
    label: '栏目4',
    key: '/page4',
    icon: <UserOutlined></UserOutlined>,
    children: [
        {
          label: '页面401',
          key: '/page4/page401',
          icon: <DesktopOutlined></DesktopOutlined>
        },
        {
            label: '页面402',
            key: '/page4/page402',
            icon: <DesktopOutlined></DesktopOutlined>
        }
    ]
  },
]

// 组件函数
const Comp: React.FC = () => {
    const navigateTo = useNavigate();
    const curretRoute = useLocation();
    console.log("----",curretRoute.pathname);
    const menuClick = (e:{key:string}) =>{
        console.log("点击了菜单", e.key);
        //点击跳转对应路由 编程式导航跳转，利用一个hook
        navigateTo(e.key);
    };


    // 展开路径锁在菜单
    // 拿着curentRoute.pathname 与Item 数组每一项children 的key 值进行对比，如果找到了就相等，去父级key
    // 父级key 给到openkeys 数组元素作为初始值
    let firstOpenKey:string = "";
    function findKey(obj:{key:string}){
        return obj.key === curretRoute.pathname
    }
    // 遍历所有children
    for (let i=0; i<items.length;i++){
        // 判断是否存在
        // items[]['children'].find(findKey) //结果找到对象，转布尔值True,或False

        // @ts-ignore
        if (items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }
    // 定义一级菜单数组，有状态的数组,根据path 展开不同菜单
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);

    // 点击保留最后最后一次
    const handleOpenChange = (keys:string[])=>{
        // 点击 展开回收菜单，控制列表实现
        console.log("最后点击key",keys)
        // 设置成最后一项，只保留最后一项，最后点击的
        setOpenKeys([keys[keys.length-1]]);
    };
    return(
        <Menu
            theme="dark"
            // 默认的高亮显示点击的page url key 值
            defaultSelectedKeys={[curretRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            // 展开回收事件 https://4x.ant.design/components/menu-cn/
            onOpenChange={handleOpenChange}
            // 当前菜单展开项的数组
            openKeys={openKeys}
        />
    )
}
export default Comp