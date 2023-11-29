import React, { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems';
import { BountyHuntListItemProps } from './bountyhuntListItem';


export interface EditItemProps {
    itemName: string;
    imgSrc: string;
    locationLost: string;
    dateLost: string;
    additionalDetails: string;
    onClick?: any;
}

const EditItemDescriptionForm: React.FC<EditItemProps> = ({
    itemName,
    imgSrc,
    locationLost,
    dateLost,
    additionalDetails,
    onClick
}) => {
    const bountyHuntList: BountyHuntListItemProps[] = BOUNTY_ITEMS;

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
    console.log("ABC");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="imageUpload">Item Image</label> */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}>
                <Image
                    alt={itemName}
                    src={imgSrc}
                    layout="intrinsic"
                    width={300}
                    height={300}
                    className="rounded-sm"
                />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
        <Image
        alt="filterIcon"
        src="/icons/IconDelete.png"
        width={30}
        height={30}/>
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
          placeholder={itemName}
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
        <Button className="w-28 rounded-lg">Cancel</Button>                   
      </div>
    </form>
  );
}

export default EditItemDescriptionForm;
