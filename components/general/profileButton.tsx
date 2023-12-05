import React, { useState, useEffect, useRef, CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import LogoFlat from "../../public/LogoFlat.png";
import { Button } from "../ui/button";

interface ProfileButtonProps {
    className?: string;
    style?: CSSProperties;
    iconSrc: string;
    buttonName: string;
    href?: string;
    unread?: boolean;
    editable?: boolean;
    localStorageKey?: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
    className = "",
    style,
    iconSrc,
    buttonName,
    href,
    unread,
    editable,
    localStorageKey,
    ...props
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableText, setEditableText] = useState(buttonName);
    const inputRef = useRef(null);

    useEffect(() => {
        if (localStorageKey) {
            const storedValue = localStorage.getItem(localStorageKey);
            if (storedValue !== null) {
                setEditableText(storedValue);
            }
        }
    }, [localStorageKey]);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    const handleKeyDown = (event: { key: string }) => {
        if (event.key === "Enter") {
            setIsEditing(false);
            // Handle saving changes here
        }
    };

    const handleTextChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        const changedValue = e.target.value.toString();
        setEditableText(changedValue);
        if (localStorageKey) {
            localStorage.setItem(localStorageKey, changedValue);
        }
    };

    return (
        <div
            className={`relative flex flex-col justify-center items-center  ${className}`}
            style={style}
        >
            <div className="bg-slate-100 px-5 max-w-[300px] w-full h-10 rounded-3xl justify-start items-center flex flex-row">
                <div className="relative pl-10">
                    {unread && (
                        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        </div>
                    )}
                    <Image
                        alt="icon"
                        src={iconSrc}
                        width={20}
                        height={20}
                    ></Image>
                </div>
                <div className="pl-14 flex-grow">
                    {editable && isEditing ? (
                        <input
                            ref={inputRef}
                            type="text"
                            className="text-navy font-bold bg-transparent outline-none w-32"
                            value={editableText}
                            onChange={handleTextChange}
                            onKeyDown={handleKeyDown}
                        />
                    ) : (
                        <p className="text-navy font-bold">{editableText}</p>
                    )}
                </div>
                {editable && (
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="p-1 bg-gray-200 rounded-full"
                    >
                        <Image
                            alt="editIcon"
                            src="/ProfileIcon/Editing.png"
                            width={20}
                            height={20}
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfileButton;
