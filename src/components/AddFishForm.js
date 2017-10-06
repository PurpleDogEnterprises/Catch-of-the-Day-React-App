import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('GOnna make some fish! 🎣');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

 

export default AddFishForm;
