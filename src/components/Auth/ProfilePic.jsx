import { Box, Circle } from "@chakra-ui/react";
import { useState } from "react";
import { Camera } from "../../Assets/svg/Camera";
import { DummyAvatar } from "../../Assets/svg/DummyAvatar";
import './Profile.css';

export const ProfilePic = ({img, pic})=>{
    const [profileImg, setProfileImg] = useState()
    return (
        <Circle className="profileBox" size="200px" border={'1px solid gray'} m="auto" color="gray" position={'relative'} overflow="hidden">
            {profileImg||img||pic?<img style={{height:'100%'}} src={profileImg?profileImg:img?img:pic?pic:""} alt="" />:<DummyAvatar/>}
            {!img&&<Box pos={'absolute'} w="100%" h="100%" className="profileCamBox" transition="all 2s">
              <Box className="overlay"><Camera/></Box>
              <input id='profile_pic' onChange={(e)=>setProfileImg(URL.createObjectURL(e.target.files[0]))}  style={{position:'absolute',left:0, top:0, width:'100%', height:'100%', opacity:'0', cursor:'pointer'}} type={'file'} />
            </Box>}
        </Circle>
    )
}