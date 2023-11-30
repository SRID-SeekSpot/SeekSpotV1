import React, { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems';
import { BountyHuntListItemProps } from './bountyhuntListItem';


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
      let currListItemsString = localStorage.getItem("dummyData")
      let currListItems = JSON.parse(currListItemsString)

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


export interface EditItemProps {
  item: {
    name: string;
    imgSrc: string;
    description: string;
    price: number;
    location: string;
    date: string;
    id: string;
  }
}

const EditItemDescriptionForm: React.FC<EditItemProps> = ({
    item
}) => {
    const bountyHuntList: BountyHuntListItemProps[] = BOUNTY_ITEMS;
    
    // console.log(item.imgSrc)

//   const [itemDetails, setItemDetails] = useState({
//     itemName: ,
//     locationLost: '',
//     dateLost: '',
//     additionalDetails: '',
//     image: null,
//   });

//   const handleInputChange = async() => {
//     const { name, value } = e.target;
//     setItemDetails(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleImageChange = async() => {
//     setItemDetails(prevState => ({
//       ...prevState,
//       image: e.target.files[0]
//     }));
//   };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log(itemDetails);
    console.log("submit");
  };


  // pop up message for delete action
  const [showPopup, setShowPopup] = useState(false);
  
  const showPopupDelete = () => {
    setShowPopup(true);
  };

  // const handleDeleteConfirm = () => {
  //   // handle delete confirm
  //   console.log('Confirmed');
  //   setShowPopup(false);
  // };

  // const handleDeleteCancel = () => {
  //   // handle delete cancel
  //   console.log('Cancelled');
  //   setShowPopup(false);
  // };

  const handlePopupClose = (choice) => {
    setShowPopup(false);
    console.log("Pass")
    // setSelectedDelivery(choice); 

    const goBack = () => {
      router.push()
    };
};


  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="imageUpload">Item Image</label> */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}>
                <Image
                    alt={item.name}
                    src={item.imgSrc}
                    width={300}
                    height={300}
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
        {showPopup && <PopupDelete onClose={handlePopupClose}  />}
      </div><br/>
      <input
        type="file"
        id="imageUpload"
        // onChange={handleImageChange}
      />
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <input
          type="text"
          name="itemName"
          placeholder={item.name}
          style={{backgroundColor:"#DCDCDC", borderRadius: '5px'}}
          // onChange={handleInputChange}
        />
      </div>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{marginLeft: '40px', width: '30%'}}>
          Location Lost: 
          <br/>
          <input
              type="text"
              name="locationLost"
              placeholder="parking lot"
              style={{backgroundColor:"#DCDCDC", borderRadius: '5px'}}
              // onChange={handleInputChange}
          />
        </div>
        <div style={{marginRight: '40px'}}>
          Date Lost: 
          <br/>
          <input
              type="text"
              name="locationLost"
              placeholder="parking lot"
              style={{backgroundColor:"#DCDCDC", borderRadius: '5px'}}
              // onChange={handleInputChange}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <textarea
            name="additionalDetails"
            placeholder="Item details"
            style={{
                marginLeft: '10px',
                height: '150px', 
                width: '80%', 
                resize: 'none',
                backgroundColor: '#DCDCDC',
                borderRadius: '5px'
            }}
            // onChange={handleInputChange}
        ></textarea>
      </div>
      <br/>
      <div className="flex flex-row justify-between items-center" style={{marginLeft: '40px', width: '88%'}}>
        <Button className="w-28 rounded-lg">Save</Button>
        <div>
          <Button className="w-28 rounded-lg"><a href="/specialist/found">Cancel</a></Button>     
        </div>
      </div>
    </form>
  );
  
};

export function getLocalStorageItem(key) {
  if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
  }
  return null;
}



export default EditItemDescriptionForm;
