import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IUser } from '../helpers/types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export interface IProps{
    postId:number
    handleClose: () => void
    picture:string
    title:string
    likedBy?:IUser[]
}
export  function Post({postId, picture, title, likedBy=[], handleClose}:IProps) {
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            POST no. {postId}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src = {picture} style={{ width: '400px', height: '300px' }}/>
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
          </Typography>
          <strong>Liked By:</strong>
            {likedBy.length > 0 ? (
              <ul>
              {likedBy?.map(user => (
                <li key={user.id}>
                  {user.name} {user.surname}
                </li>
              ))}
            </ul>
            ) : <p>No likes yet</p>
             }
          
        </Box>
      </Modal>
    </div>
  );
}