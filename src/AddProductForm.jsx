import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProductForm() {
    const [product, setProduct] = useState({
        name: '',
        image: null,
        category_id: 1
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
        console.log(product)
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2097152) { 
            toast.error('Image size should be less than 2MB');
        } else {
            setProduct({
                ...product,
                image: file
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(product)
        if (product.name && product.category_id && product.image) {
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('category_id', product.category_id);
            formData.append('image', product.image);
            console.log(formData)
            try {
                const response = await fetch('https://neon-logic-sih-backend.onrender.com/api/v1/farmer/prototypeproduct', {
                    method: 'POST',
                    body: formData
                }).then(res=>res);
                console.log(response)
                if (response.status==201) {
                    toast.success('Product added successfully!');
                    console.log('Product Details:', product);
                    setProduct({
                        name: '',
                        image: null,
                        category_id: product.category_id
                    });
                } else {
                    toast.error('Failed to add product. Please try again.');
                }
            } catch (error) {
                toast.error('An error occurred. Please try again.');
                console.error('Error:', error);
            }
        } else {
            toast.error('Please fill in all fields and upload a valid image.');
        }
    };

    return (
        <div className="glass-container">
            <ToastContainer />
            <Typography variant="h5" gutterBottom>
                Add New Product
            </Typography>
            <form onSubmit={handleSubmit} className="contact-form">
                <TextField
                    label="Product Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <FormControl fullWidth required>
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category_id"
                        value={product.category}
                        onChange={handleChange}
                    >
                        <MenuItem value="1">Vegetables</MenuItem>
                        <MenuItem value="2">Leafy Vegetables</MenuItem>
                        <MenuItem value="3">Root Vegetables</MenuItem>
                        <MenuItem value="4">Cruciferous Vegetables</MenuItem>
                        <MenuItem value="5">Gourds and Squashes</MenuItem>
                        <MenuItem value="6">Pods and Legumes</MenuItem>
                        <MenuItem value="7">Bulb and Stem Vegetables</MenuItem>
                        <MenuItem value="8">Fruiting Vegetables</MenuItem>
                        <MenuItem value="9">Fruits</MenuItem>
                        <MenuItem value="10">Citrus Fruits</MenuItem>
                        <MenuItem value="11">Tropical and Subtropical Fruits</MenuItem>
                        <MenuItem value="12">Berries</MenuItem>
                        <MenuItem value="13">Pomes</MenuItem>
                        <MenuItem value="14">Drupes</MenuItem>
                        <MenuItem value="15">Melons</MenuItem>
                        <MenuItem value="16">Stone Fruits</MenuItem>
                        <MenuItem value="17">Nuts and Dry Fruits</MenuItem>
                        <MenuItem value="18">Others</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                >
                    Upload Image
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default AddProductForm;
