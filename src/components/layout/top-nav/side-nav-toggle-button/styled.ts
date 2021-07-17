import styled from 'styled-components'

export default styled.div`

.toggle-menu {

    margin-left: 15px;
    background-color: #F1F1F1;
    height: 32px;
    width: 32px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22);
	cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;

	&.open {
	
		.burger-lines {
		    background: transparent; // fade away the middle line
		 
		    &:before,
		    &:after {
				transition: top 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
				top: 0;
				width: 20px;
		    }

		    &:before {
				transform: rotate3d(0,0,1,45deg) scale(1.1); 
		    }

		    &:after {
				transform: rotate3d(0,0,1,-45deg) scale(1.1); 
		    }
		}
			
	}

}

/*.burger-lines {
	display: inline-block;
	cursor: pointer;
	user-select: none;
	transition: all 300ms ease;
	width: 20px;
	height: 4px;
	background-color: #4F4949;
	position: relative;
	top: -2px;

	&:before,
	&:after {
		content: '';
		display: inline-block;
		width: 20px;
		height: 4px;
		background-color: #4F4949;
		position: absolute;
		left: 0;
		transform-origin: 50% 50%;
		transition: top 300ms 300ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1), background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	&:before { 
	  	top: 8px; 
	}
	&:after { 
	  	top: -8px; 
	}

}*/

.line {
    
    height: 3px;
    width: 20px;
    background-color: #4F4949;
    border-radius: 10px;
	transform-origin: center center;

    &:not(:first-child) {
         margin-top: 2px;
    }
}

`