import React, { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems';
import { BountyHuntListItemProps } from './bountyhuntListItem';
import Link from '@/node_modules/next/link';
import FoundListItem from './foundListItem';
import { COLORS_CATEGORY } from '@/app/constants/ColorsCategory';
import { ITEMS_CATEGORY } from '@/app/constants/ItemCategory';


// pop up area
const PopupDelete = ({ onClose }) => {
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

  // delete confirm action
  const handleDeleteConfirm = () => {

      // delete item from the category
      let currListItemsString = localStorage.getItem("dummyData")
      let currListItems = JSON.parse(currListItemsString)

      // const foundItem = BOUNTY_ITEMS.find((item) => item.id === itemIndex[0]);

      let currIndex = localStorage.getItem("currIndex")

      console.log("Delete Confirm Action")
      console.log(currListItems[0].name)
  };

  return (
      <div className="popup-container" style={popupContainerStyle}>
          <div className="popup-content" style={popupContentStyle}>
                  <p className='mt-5 text-sm'>Are you sure you want to delete the item?</p>
              {/* Button Panel */}
              <div className="flex mt-35 justify-between ">
                  <Button className="w-30 mt-8 ml-8" asChild onClick={handleDeleteConfirm}>
                    <a>Confirm</a>
                  </Button>
                  <Button className="w-30 mt-8 mr-8"  onClick={()=> onClose()}>
                    <a>Cancel</a>
                  </Button>
              </div>
          </div>
          
      </div>
  );
};


const PopupCongratulations = ({onClose}) => {

    const popupCongratulationsStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    };

    const popupContentStyle = {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      width: '90%', // Adjust as needed
    };

    const paragraphStyle = {
      fontSize: '18px', 
      fontWeight: 'bold', 
    };

    return (
      <div>
        <div className="popup-container" style={popupCongratulationsStyle}>
                <div className="popup-content" style={popupContentStyle}>
                    <div className="flex items-center flex-col">
                        <Image
                            src="/icons/congratulations.png"
                            alt="congratulations"
                            width={48} 
                            height={48} 
                        />
                        <p className='mt-5 text-sm' style={paragraphStyle}>Congratulations!</p>
                        <p>The item has now been removed from the inventory.</p>
                        <div className="flex items-center justify-center">
                            <Button className="mt-5 w-200 h-10" >
                                <a href='/specialist/found'>OK</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}


const PopupSave = ({onClose}) => {

  const popupSaveStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const popupContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '90%', // Adjust as needed
  };

  const paragraphStyle = {
    fontSize: '18px', 
    fontWeight: 'bold', 
  };

  return (
    <div>
      <div className="popup-container" style={popupSaveStyle}>
              <div className="popup-content" style={popupContentStyle}>
                  <div className="flex items-center flex-col">
                      <Image
                          src="/icons/congratulations.png"
                          alt="congratulations"
                          width={48} 
                          height={48} 
                      />
                      <p>You edit has been saved!</p>
                      <div className="flex items-center justify-center">
                          <Button className="mt-5 w-200 h-10" >
                              <a href='/specialist/found'>Confirm</a>
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export interface EditItemProps {
  item: {
    name: string;
    imgSrc: string;
    description: string;
    color: string;
    category: string;
    price: number;
    location: string;
    date: string;
    id: string;
  }
}

const EditItemDescriptionForm: React.FC<EditItemProps> = ({
    item
}) => {

  const[showPopup, setShowPopup] = useState(false); // pop up message for delete action
  const[showCongratulations, setShowCongratulations] = useState(false);
  const[showSave, setShowSave] = useState(false);

  const [formFields, setFormFields] = useState({
    itemName: item.name,
    locationLost: item.location,
    dateLost: item.date,
    itemColor: item.color,
    itemCategory: item.category,
    additionalDetails: item.description,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Access the form data in the formFields state object
    console.log("Form Data:", formFields);
    
    // may need to save data in local storage
  };

  
  const showPopupDelete = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleCongratulationsClose = () => {
    setShowCongratulations(false);
  };

  const handleSaveClose = () => {
    setShowSave(false);
  };



  return (
    // <div style={{width:"95%"}}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{width: '90%'}}>
        {/* <label htmlFor="imageUpload">Item Image</label> */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}>
                  <Image
                      alt={item.name}
                      src={item.imgSrc}
                      width={250}
                      height={250}
                      className="rounded-sm"
                  />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
          <button onClick={showPopupDelete}>
            <Image
            alt="filterIcon"
            src="/icons/IconDelete.png"
            width={30}
            height={30}/>
          </button>
          {showPopup && <PopupDelete onClose={handlePopupClose}/>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <input
            type="text"
            name="itemName"
            // placeholder={item.name}
            style={{backgroundColor:"#DCDCDC", borderRadius: '5px', paddingLeft: '5px', width:'100%'}}
            value = {item.name}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div style={{width: '45%'}}>
            Location Lost: 
            <br/>
            <input
                type="text"
                name="locationLost"
                placeholder="parking lot"
                style={{backgroundColor:"#DCDCDC", borderRadius: '5px', paddingLeft: '5px', width:'100%'}}
                value = {item.location}
                onChange={handleInputChange}
            />
          </div>
          <div style={{width: '45%'}}>
            Date Lost: 
            <br/>
            <input
                type="text"
                name="locationLost"
                placeholder="Date Lost"
                style={{backgroundColor:"#DCDCDC", borderRadius: '5px', paddingLeft: '5px', width:'100%'}}
                value = {item.date}
                onChange={handleInputChange}
            />
              {/* <input
                id="dateFound"
                name="dateFound"
                type="date"
                style={{backgroundColor:"#DCDCDC", borderRadius: '5px'}}
                value = {item.date}
                onChange={handleInputChange}
              /> */}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div style={{width: '45%'}}>
            Item Color: 
            <br/>
            <select
                id="itemColor"
                name="itemColor"
                className="w-full p-2 border rounded"
                style={{backgroundColor:"#DCDCDC", borderRadius: '5px'}}
                onChange={handleInputChange}
                value={formFields.itemColor}
            >
              {COLORS_CATEGORY.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div style={{width: '45%'}}>
            Item Category: 
            <br/>
            <select
                id="itemCategory"
                name="itemCategory"
                className="w-full p-2 border rounded"
                style={{backgroundColor:"#DCDCDC", borderRadius: '5px'}}
                onChange={handleInputChange}
                value={formFields.itemCategory}
              >
                {ITEMS_CATEGORY.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <textarea
              name="additionalDetails"
              placeholder="Item details"
              style={{
                  height: '150px', 
                  width: '100%', 
                  resize: 'none',
                  backgroundColor: '#DCDCDC',
                  borderRadius: '5px',
                  padding: '5px'
              }}
              value={formFields.additionalDetails}
              onChange={handleInputChange}
          ></textarea>
        </div>
        <br/>
        <div className="flex flex-row justify-between items-center" style={{ display: 'flex', justifyContent: 'center'}}>
          <Button onClick={() => setShowSave(true)} 
            className="w-40 rounded-lg">Save
          </Button>
          {showSave && <PopupSave onClose={handleSaveClose}  />}

          <Button className="w-40 rounded-lg" style={{ marginLeft: 'auto' }}>
            <a href="/specialist/found">Cancel</a>
          </Button>
        </div>
        
        <br/>
        <div className="pb-20 flex flex-column items-center justify-center">
          <a onClick={() => setShowCongratulations(true)}>
            <p style={{ color: 'blue', textDecoration: 'underline' }}>Report as Found</p>
          </a>
          {showCongratulations && <PopupCongratulations onClose={handleCongratulationsClose}  />}
        </div>

      </form>
    </div>
  );
  
};

export function getLocalStorageItem(key) {
  if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
  }
  return null;
}


export default EditItemDescriptionForm;
