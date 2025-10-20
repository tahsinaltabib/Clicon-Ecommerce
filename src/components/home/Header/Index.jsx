import React from "react";
import {imageProvider} from "../../../helpers/imgProvider";
import Container from '../../commonComponents/Container';

const Header = () => {
  return (
    <div className="bg-gray_900 py-[18px]">
       <Container>
          <picture>
             <img src={imageProvider.logo} alt={imageProvider.logo}/>
           </picture>
           <div>
              <h3 className="label3 text-gray_00">Up to</h3>
              <span className="display4 text-warning_500">59%</span>
              <h3 className="body_xl_600 text-gray_00">OFF</h3>
           </div>
       </Container>
    </div>
  )
};

export default React.memo(Header) || Header;