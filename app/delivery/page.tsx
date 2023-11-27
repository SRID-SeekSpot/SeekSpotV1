"use client";

import Header from "@/components/general/messageHeader";
import React, { useState, useRef} from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/general/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";
const Popup = ({ onClose }) => {
    
    const popupContainerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const popupContentStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };
    const deliveryOptionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%', 
        alignItems: 'center',
    };
    const deliveryTitleStyle = {
        textAlign: 'center', // 添加居中样式
        width: '100%', // 确保标题占满整个宽度
        fontSize: '1.875rem', // 相当于 text-3xl
        color: '#003366', // 相当于 text-navy
        marginBottom: '1rem', // 添加一些底部空间
    };
    const addressTitleStyle = {
        fontSize: '1rem', // 比 text-3xl 小
        color: '#003366', // 相当于 text-navy
        marginTop: '2rem', // 增加上方间隔
        textAlign: 'left', // 左对齐文本
    };
    const addressTextAreaStyle = {
        width: '100%', // 宽度占满容器
        padding: '10px', // 一些内边距以方便输入
        marginTop: '1rem', // 在输入框上方留出一些空间
        borderRadius: '5px', // 轻微的边框圆角
        border: '1px solid #ccc', // 边框样式
        resize: 'none', // 防止用户调整大小
    };
    // const handleConfirm = () => {
    //     onClose('DHL');  // 假设用户选择了 DHL
    // };
    // 新增状态来跟踪用户选择的送货方式
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('');

    // 处理送货方式选择的事件
    const handleDeliveryOptionChange = (e) => {
        setSelectedDeliveryOption(e.target.value);
    };

    // 修改确认按钮的处理逻辑
    const handleConfirm = () => {
        if (selectedDeliveryOption === 'ups' || selectedDeliveryOption === 'dhl') {
            onClose(selectedDeliveryOption);
        } else {
            // 可以在这里显示错误消息或做其他处理
            console.log('Please select a delivery option.');
        }
    };
    return (
        <div className="popup-container" style={popupContainerStyle}>
            <div className="popup-content" style={popupContentStyle}>
                <p style={deliveryTitleStyle}>
                    <strong>Delivery</strong></p>
                <div style={deliveryOptionStyle}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="radio"
                            id="ups"
                            name="delivery"
                            value="ups"
                            className="mr-2"
                            onChange={handleDeliveryOptionChange}
                        />
                        <label htmlFor="ups" className="mr-4 text-lg">
                            UPS
                        </label>
                    </div>
                    <div className="text-lg">
                        Shipping fee: $7
                    </div>
                </div>
                <div style={deliveryOptionStyle}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="radio"
                            id="dhl"
                            name="delivery"
                            value="dhl"
                            className="mr-2"
                            onChange={handleDeliveryOptionChange}
                        />
                        <label htmlFor="dhl" className="text-lg">
                            DHL
                        </label>
                    </div>
                    <div className="text-lg">
                        Shipping fee: $9
                    </div>
                </div>
                <p style={addressTitleStyle}>
                    Enter Address:
                </p>
                <textarea
                    defaultValue="516 2nd Ave, Mountain View, CA, 90128"
                    style={addressTextAreaStyle}
                    rows={3}
                />
                {/* Button Panel */}
                <div className="flex flex-col mt-20 justify-between space-y-4">
                    <Button className="w-56" asChild onClick={handleConfirm} disabled={!selectedDeliveryOption}>
                        <a>Confirm</a>
                    </Button>
                    <Button className="w-56" variant={"secondary"} onClick={()=> onClose()}>
                    <a href="/delivery">Cancel</a>
                    </Button>
                </div>
            </div>
            
        </div>
    );
};

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDelivery, setSelectedDelivery] = useState(null); // 新增状态
    const navButtons = SPECIALIST_ROUTES;
    const shipToMeRef = useRef(null);

    const handleDeliveryChange = (e) => {
        if (e.target.value === 'ship-to-me') {
            setShowPopup(true);
        }
    };

    const handlePopupClose = (choice) => {
        setShowPopup(false);
        setSelectedDelivery(choice); // 设置选中的送货方式
    };

    
    return (
        <div className="flex flex-col">
            <Header altText="Message" />
            <div className="m-4 flex flex-col items-center justify-center">
            <Separator />
                <Card className="m-9 w-55">
                    <CardContent className="grid gap-4">
                        <p className="text-3xl text-navy">
                            Your reported item: <strong>Black Glasses </strong>
                        </p>
                        <p className="text-3xl text-navy">
                        Has Been Founded!
                        </p>
                         {/* image */}
                         <div className="w-full flex justify-center"> {/* 使用 flex 容器使图像居中 */}
                        <Image
                            src="/bountyItems/BlackGlasses.png" // 替换成你的图像路径
                            alt="Black Glasses"
                            width={300} // 设定图像的宽度
                            height={100} // 设定图像的高度
                            //objectFit="contain" // 保持图像的宽高比
                        />
                        </div>
                        <div className="w-full flex justify-center">
                            <p className="text-3xl text-navy">
                            <strong>Get it back now!</strong>
                            </p>
                        </div>
                        <div className="flex items-center">
                        <input
                            type="radio"
                            id="in-person"
                            name="delivery"
                            value="in-person"
                            className="mr-2"
                        />
                        <label htmlFor="in-person" className="mr-4 text-lg">
                            Get it in person
                        </label>
                        </div>
                        <div className="flex items-center">
                        <input
                            type="radio"
                            id="ship-to-me"
                            name="delivery"
                            value="ship-to-me"
                            className="mr-2"
                            onChange={handleDeliveryChange}
                            ref={shipToMeRef}
                        />
                        <label htmlFor="ship-to-me" className="text-lg">
                            Ship it to me
                        </label>
                    </div>
                    </CardContent>
                </Card>
            </div>
            {selectedDelivery && (
            <p className="text-xl text-green-600">
                Congratulations! Your item will come back home shortly.
                Here is the tracking info: XX123456ABC
            </p>
        )}
        {showPopup && <Popup onClose={handlePopupClose} />}
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
        
    );
}
