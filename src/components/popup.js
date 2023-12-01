import '../App.css';
import { Popover, PopoverHandler, PopoverContent, Button } from "@material-tailwind/react";

function Popup({openPopover, setOpenPopover}) {
    if(openPopover){
        setTimeout(() => {
        setOpenPopover(false);
        }, 1500);
    }

  return (
    <div>
        <Popover open={openPopover} placement="top-end">
        <PopoverHandler>
        <Button className='invisibleButton'> </Button>
        </PopoverHandler>
        <PopoverContent>
        <div>
        <h3>Suceess</h3>
        </div>
        <div>
        <p>Product has been added</p>
        </div>
        </PopoverContent>
        </Popover>
    </div>
  );
}

export default Popup;