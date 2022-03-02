import React from 'react'
import Skeleton from '@mui/material/Skeleton';
export const Skeletonc = (props) => {
  return (
    <div className="newsframe">
    <div style={{display:'flex',flexDirection:'column',marginBottom:'12px'}}> 
    <Skeleton width={420} height={35} sx={{margin:'auto',bgcolor: props.col }}  />
    <Skeleton width={230} height={35} sx={{margin:'auto',bgcolor: props.col }}  />
    <Skeleton sx={{margin:'12px',borderRadius:'16px',marginBottom:'9px',bgcolor: props.col}} variant="rectangular" animation="wave"  width={430} height={270} />
    <Skeleton width={420} sx={{margin:'auto',bgcolor: props.col }} />
    <Skeleton width={230} sx={{margin:'auto',bgcolor: props.col }}  />
    <Skeleton width={165} height={55} sx={{margin:'auto',bgcolor: props.col,borderRadius:'15px',marginTop:'-5px' }}  />
    </div>
    </div>
  )
}
