import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Home = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    
    navigate("/login");
  };

  return (
    <div className="background-img">
      <Stack direction="row" spacing={2}>
        <div className="getstarted">
          <Button variant="contained" color="success" onClick={handleGetStarted}>
            Hello
          </Button>
        </div>
      </Stack>
      <div>
        {/* <Link to="/login"> LogIn </Link> */}
      </div>
    </div>
  );
};
