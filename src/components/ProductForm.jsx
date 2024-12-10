import React, { useState } from "react";

function ProductForm() {
  // State สำหรับเก็บค่าของฟิลด์แต่ละตัว
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนค่าใน Input
  function handleInputChange(event) {
    const { name, value } = event.target; // ดึงชื่อและค่าของ Input
    setFormData({
      ...formData, // คัดลอกค่าเดิมของ State
      [name]: value, // อัปเดตค่าใหม่ของฟิลด์ที่เปลี่ยน
    });
  }

  // ฟังก์ชันสำหรับจัดการเมื่อกดปุ่ม Submit
  function handleSubmit(event) {
    event.preventDefault(); // หยุดการรีเฟรชหน้าเว็บไซต์
    alert(JSON.stringify(formData, null, 2)); // แสดงข้อมูลในรูปแบบ JSON
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={formData.name} // เชื่อม State กับ Input
            onChange={handleInputChange} // เรียกฟังก์ชันเมื่อค่าถูกเปลี่ยน
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
