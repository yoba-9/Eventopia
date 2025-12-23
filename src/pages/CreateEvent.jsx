// pages/CreateEvent.jsx
import React, { useState, useRef } from 'react';

const CreateEvent = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [errors, setErrors] = useState({});
  const [eventImage, setEventImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  
  const [eventData, setEventData] = useState({
    name: '',
    category: '',
    description: '',
    date: '',
    time: '',
    location: '',
    image: null,
    tickets: [
      { name: 'General Admission', price: '', quantity: '' },
      { name: 'VIP', price: '', quantity: '' },
      { name: 'Early Bird', price: '', quantity: '' }
    ],
    isPublished: false,
    status: 'draft'
  });

  const steps = [
    { number: 1, label: 'Basic Info' },
    { number: 2, label: 'Details' },
    { number: 3, label: 'Tickets' },
    { number: 4, label: 'Submit for Review' }
  ];

  const categories = [
    'Music',
    'Education', 
    'Business',
    'Food & Drink',
    'Sports',
    'Arts & Theater'
  ];

  const createEventPage = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    paddingTop: '40px',
  };

  const pageHeader = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '60px 0',
    textAlign: 'center',
    marginBottom: '40px',
  };

  const headerContent = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const pageTitle = {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '15px',
  };

  const pageSubtitle = {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '40px',
  };

  const container = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px 60px',
  };

  const stepsContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    position: 'relative',
  };

  const stepItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
  };

  const stepCircle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
  };

  const activeStepCircle = {
    backgroundColor: '#667eea',
    color: 'white',
    border: '3px solid #667eea',
  };

  const completedStepCircle = {
    backgroundColor: '#10b981',
    color: 'white',
    border: '3px solid #10b981',
  };

  const inactiveStepCircle = {
    backgroundColor: 'white',
    color: '#999',
    border: '3px solid #ddd',
  };

  const stepLabel = {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#333',
  };

  const activeStepLabel = {
    color: '#667eea',
    fontWeight: '600',
  };

  const completedStepLabel = {
    color: '#10b981',
    fontWeight: '600',
  };

  const stepsLine = {
    position: 'absolute',
    top: '20px',
    left: '20%',
    right: '20%',
    height: '3px',
    backgroundColor: '#ddd',
    zIndex: 1,
  };

  const progressLine = {
    position: 'absolute',
    top: '20px',
    left: '20%',
    height: '3px',
    backgroundColor: '#667eea',
    zIndex: 1,
    transition: 'width 0.3s ease',
  };

  const sectionDivider = {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '40px 0',
  };

  const formSection = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    marginBottom: '30px',
  };

  const sectionTitle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '25px',
    color: '#333',
  };

  const formGroup = {
    marginBottom: '25px',
  };

  const label = {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  };

  const requiredStar = {
    color: '#e74c3c',
  };

  const errorText = {
    color: '#e74c3c',
    fontSize: '0.85rem',
    marginTop: '5px',
    display: 'block',
  };

  const textInput = {
    width: '100%',
    padding: '12px 15px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    transition: 'border 0.3s',
    boxSizing: 'border-box',
  };

  const errorInput = {
    borderColor: '#e74c3c',
  };

  const textArea = {
    width: '100%',
    padding: '12px 15px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    minHeight: '120px',
    resize: 'vertical',
    boxSizing: 'border-box',
  };

  const placeholderText = {
    color: '#999',
    fontStyle: 'italic',
  };

  const categoriesGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginTop: '10px',
  };

  const categoryButton = {
    padding: '12px 15px',
    backgroundColor: 'white',
    border: '2px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  };

  const selectedCategoryButton = {
    backgroundColor: '#667eea',
    color: 'white',
    borderColor: '#667eea',
  };

  const uploadArea = {
    border: '2px dashed #ddd',
    borderRadius: '6px',
    padding: imagePreview ? '20px' : '50px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border 0.3s',
    backgroundColor: '#f8f9fa',
    position: 'relative',
    overflow: 'hidden',
  };

  const uploadAreaHover = {
    borderColor: '#667eea',
    backgroundColor: '#f0f4ff',
  };

  const uploadIcon = {
    fontSize: '3rem',
    color: '#667eea',
    marginBottom: '15px',
  };

  const uploadText = {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '10px',
  };

  const uploadSubtext = {
    fontSize: '0.9rem',
    color: '#666',
  };

  const imagePreviewContainer = {
    position: 'relative',
    maxWidth: '100%',
    margin: '0 auto',
  };

  const imagePreviewStyle = {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'contain',
    borderRadius: '4px',
  };

  const removeImageButton = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(231, 76, 60, 0.9)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    transition: 'all 0.3s',
  };

  const fileInfo = {
    marginTop: '15px',
    fontSize: '0.9rem',
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const fileSize = {
    fontWeight: '500',
  };

  const dateTimeGroup = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  };

  const ticketRow = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr auto',
    gap: '15px',
    marginBottom: '15px',
    alignItems: 'center',
  };

  const ticketHeader = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr auto',
    gap: '15px',
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '2px solid #eee',
  };

  const headerCell = {
    fontWeight: '600',
    color: '#333',
    fontSize: '0.9rem',
  };

  const priceInput = {
    ...textInput,
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  };

  const quantityInput = {
    ...textInput,
  };

  const reviewCard = {
    backgroundColor: '#f0f7ff',
    border: '2px solid #3b82f6',
    borderRadius: '10px',
    padding: '30px',
    textAlign: 'center',
  };

  const reviewIcon = {
    fontSize: '4rem',
    color: '#3b82f6',
    marginBottom: '20px',
  };

  const reviewTitle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#3b82f6',
    marginBottom: '15px',
  };

  const reviewText = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '25px',
    lineHeight: '1.6',
  };

  const eventSummary = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
    textAlign: 'left',
  };

  const summaryItem = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid #f0f0f0',
  };

  const summaryLabel = {
    fontWeight: '500',
    color: '#666',
  };

  const summaryValue = {
    fontWeight: '600',
    color: '#333',
  };

  const adminNote = {
    backgroundColor: '#fff7ed',
    border: '1px solid #fdba74',
    borderRadius: '8px',
    padding: '15px',
    marginTop: '20px',
    textAlign: 'left',
  };

  const noteTitle = {
    fontWeight: '600',
    color: '#ea580c',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const noteText = {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  };

  const backButton = {
    backgroundColor: 'transparent',
    color: '#4a5568',
    border: '1px solid #ddd',
    padding: '12px 30px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxSizing: 'border-box',
  };

  const nextButton = {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
    boxSizing: 'border-box',
  };

  const submitButton = {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '12px 40px',
    borderRadius: '6px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
    boxSizing: 'border-box',
  };

  const calculateProgress = () => {
    return ((activeStep - 1) / (steps.length - 1)) * 66;
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!eventData.name.trim()) {
      newErrors.name = 'Event name is required';
    }
    
    if (!eventData.category) {
      newErrors.category = 'Please select a category';
    }
    
    if (!eventImage) {
      newErrors.image = 'Event image is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!eventData.description.trim()) {
      newErrors.description = 'Event description is required';
    }
    
    if (!eventData.date) {
      newErrors.date = 'Event date is required';
    }
    
    if (!eventData.time) {
      newErrors.time = 'Event time is required';
    }
    
    if (!eventData.location.trim()) {
      newErrors.location = 'Event location is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    let hasValidTickets = false;
    
    eventData.tickets.forEach((ticket, index) => {
      if (ticket.name || ticket.price || ticket.quantity) {
        if (!ticket.name.trim()) {
          newErrors[`ticketName_${index}`] = 'Ticket name is required';
        }
        
        if (!ticket.price) {
          newErrors[`ticketPrice_${index}`] = 'Ticket price is required';
        } else if (isNaN(parseFloat(ticket.price)) || parseFloat(ticket.price) < 0) {
          newErrors[`ticketPrice_${index}`] = 'Please enter a valid price';
        }
        
        if (!ticket.quantity) {
          newErrors[`ticketQuantity_${index}`] = 'Available tickets is required';
        } else if (isNaN(parseInt(ticket.quantity)) || parseInt(ticket.quantity) <= 0) {
          newErrors[`ticketQuantity_${index}`] = 'Please enter a valid quantity';
        }
        
        hasValidTickets = true;
      }
    });
    
    if (!hasValidTickets) {
      newErrors.tickets = 'At least one ticket type is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setErrors({...errors, image: 'Please upload a valid image file (JPEG, PNG, GIF)'});
      return;
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      setErrors({...errors, image: 'Image size should be less than 5MB'});
      return;
    }

    // Clear any previous image errors
    if (errors.image) {
      setErrors({...errors, image: null});
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setEventImage(file);
      setEventData({...eventData, image: file});
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setEventImage(null);
    setImagePreview(null);
    setEventData({...eventData, image: null});
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTicketChange = (index, field, value) => {
    const updatedTickets = [...eventData.tickets];
    
    if (field === 'price') {
      const filteredValue = value.replace(/[^0-9.]/g, '');
      const decimalCount = (filteredValue.match(/\./g) || []).length;
      updatedTickets[index][field] = decimalCount <= 1 ? filteredValue : filteredValue.slice(0, -1);
    } else if (field === 'quantity') {
      updatedTickets[index][field] = value.replace(/[^0-9]/g, '');
    } else {
      updatedTickets[index][field] = value;
    }
    
    setEventData({...eventData, tickets: updatedTickets});
    
    const errorKey = `ticket${field.charAt(0).toUpperCase() + field.slice(1)}_${index}`;
    if (errors[errorKey]) {
      const newErrors = {...errors};
      delete newErrors[errorKey];
      setErrors(newErrors);
    }
  };

  const addNewTicket = () => {
    setEventData({
      ...eventData,
      tickets: [...eventData.tickets, { name: '', price: '', quantity: '' }]
    });
  };

  const removeTicket = (index) => {
    if (eventData.tickets.length > 1) {
      const updatedTickets = [...eventData.tickets];
      updatedTickets.splice(index, 1);
      setEventData({...eventData, tickets: updatedTickets});
    }
  };

  const handleNext = () => {
    let isValid = false;
    
    switch(activeStep) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      default:
        isValid = true;
    }
    
    if (isValid) {
      setActiveStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div style={formSection}>
            <h2 style={sectionTitle}>Basic Information</h2>
            
            {/* Event Name */}
            <div style={formGroup}>
              <label style={label}>
                Event Name <span style={requiredStar}>*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Summer Music Festival 2025"
                style={{
                  ...textInput,
                  ...(errors.name ? errorInput : {})
                }}
                value={eventData.name}
                onChange={(e) => {
                  setEventData({...eventData, name: e.target.value});
                  if (errors.name) {
                    setErrors({...errors, name: null});
                  }
                }}
                required
              />
              {errors.name && <span style={errorText}>{errors.name}</span>}
              <small style={placeholderText}>
                Enter a descriptive name for your event
              </small>
            </div>

            {/* Event Category */}
            <div style={formGroup}>
              <label style={label}>
                Event Category <span style={requiredStar}>*</span>
              </label>
              <div style={categoriesGrid}>
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    style={{
                      ...categoryButton,
                      ...(selectedCategory === category ? selectedCategoryButton : {})
                    }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setEventData({...eventData, category});
                      if (errors.category) {
                        setErrors({...errors, category: null});
                      }
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
              {errors.category && <span style={errorText}>{errors.category}</span>}
            </div>

            {/* Event Image */}
            <div style={formGroup}>
              <label style={label}>
                Event Image <span style={requiredStar}>*</span>
              </label>
              <p style={{ color: '#666', marginBottom: '15px' }}>
                Upload a high-quality image that represents your event (JPEG or PNG, at least 1200x600px)
              </p>
              
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              
              <div
                style={{
                  ...uploadArea,
                  ...(errors.image ? errorInput : {})
                }}
                onClick={() => fileInputRef.current.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.backgroundColor = '#f0f4ff';
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = '#ddd';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = '#ddd';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  
                  if (e.dataTransfer.files.length > 0) {
                    const file = e.dataTransfer.files[0];
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    fileInputRef.current.files = dataTransfer.files;
                    fileInputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
                  }
                }}
              >
                {imagePreview ? (
                  <div style={imagePreviewContainer}>
                    <img 
                      src={imagePreview} 
                      alt="Event preview" 
                      style={imagePreviewStyle}
                    />
                    <button
                      type="button"
                      style={removeImageButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage();
                      }}
                      title="Remove image"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                    {eventImage && (
                      <div style={fileInfo}>
                        <span>{eventImage.name}</span>
                        <span style={fileSize}>
                          {(eventImage.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div style={uploadIcon}>
                      <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div style={uploadText}>
                      Click to upload image or drag and drop
                    </div>
                    <div style={uploadSubtext}>
                      Supports JPEG, PNG • Max 5MB • Min 1200x600px
                    </div>
                  </>
                )}
              </div>
              
              {errors.image && <span style={errorText}>{errors.image}</span>}
              <small style={placeholderText}>Required field • Recommended size: 1200x600px</small>
            </div>
          </div>
        );

      case 2:
        return (
          <div style={formSection}>
            <h2 style={sectionTitle}>Event Details</h2>
            
            {/* Event Description */}
            <div style={formGroup}>
              <label style={label}>
                Event Description <span style={requiredStar}>*</span>
              </label>
              <textarea
                placeholder="Describe your event in detail. Include what attendees can expect, agenda, special guests, etc."
                style={{
                  ...textArea,
                  ...(errors.description ? errorInput : {})
                }}
                value={eventData.description}
                onChange={(e) => {
                  setEventData({...eventData, description: e.target.value});
                  if (errors.description) {
                    setErrors({...errors, description: null});
                  }
                }}
                required
              />
              {errors.description && <span style={errorText}>{errors.description}</span>}
            </div>

            {/* Date and Time */}
            <div style={formGroup}>
              <label style={label}>
                Date & Time <span style={requiredStar}>*</span>
              </label>
              <div style={dateTimeGroup}>
                <div>
                  <input
                    type="date"
                    style={{
                      ...textInput,
                      ...(errors.date ? errorInput : {})
                    }}
                    value={eventData.date}
                    onChange={(e) => {
                      setEventData({...eventData, date: e.target.value});
                      if (errors.date) {
                        setErrors({...errors, date: null});
                      }
                    }}
                    required
                  />
                  {errors.date && <span style={errorText}>{errors.date}</span>}
                </div>
                <div>
                  <input
                    type="time"
                    style={{
                      ...textInput,
                      ...(errors.time ? errorInput : {})
                    }}
                    value={eventData.time}
                    onChange={(e) => {
                      setEventData({...eventData, time: e.target.value});
                      if (errors.time) {
                        setErrors({...errors, time: null});
                      }
                    }}
                    required
                  />
                  {errors.time && <span style={errorText}>{errors.time}</span>}
                </div>
              </div>
            </div>

            {/* Location */}
            <div style={formGroup}>
              <label style={label}>
                Location <span style={requiredStar}>*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Millennium Hall, Addis Ababa"
                style={{
                  ...textInput,
                  ...(errors.location ? errorInput : {})
                }}
                value={eventData.location}
                onChange={(e) => {
                  setEventData({...eventData, location: e.target.value});
                  if (errors.location) {
                    setErrors({...errors, location: null});
                  }
                }}
                required
              />
              {errors.location && <span style={errorText}>{errors.location}</span>}
            </div>
          </div>
        );

      case 3:
        return (
          <div style={formSection}>
            <h2 style={sectionTitle}>Ticket Setup</h2>
            
            <p style={{ color: '#666', marginBottom: '25px' }}>
              Set up different ticket types, pricing, and availability for your event
            </p>

            {errors.tickets && <span style={errorText}>{errors.tickets}</span>}

            <div style={ticketHeader}>
              <div style={headerCell}>Ticket Name <span style={requiredStar}>*</span></div>
              <div style={headerCell}>Price (ETB) <span style={requiredStar}>*</span></div>
              <div style={headerCell}>Available <span style={requiredStar}>*</span></div>
              <div style={headerCell}></div>
            </div>

            {eventData.tickets.map((ticket, index) => (
              <div key={index} style={ticketRow}>
                <div>
                  <input
                    type="text"
                    placeholder="e.g. General Admission"
                    style={{
                      ...textInput,
                      ...(errors[`ticketName_${index}`] ? errorInput : {})
                    }}
                    value={ticket.name}
                    onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
                  />
                  {errors[`ticketName_${index}`] && (
                    <span style={errorText}>{errors[`ticketName_${index}`]}</span>
                  )}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{
                      padding: '12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #ddd',
                      borderRight: 'none',
                      borderTopLeftRadius: '6px',
                      borderBottomLeftRadius: '6px',
                      minWidth: '60px',
                      textAlign: 'center',
                    }}>ETB</span>
                    <input
                      type="text"
                      placeholder="0.00"
                      style={{
                        ...priceInput,
                        ...(errors[`ticketPrice_${index}`] ? errorInput : {})
                      }}
                      value={ticket.price}
                      onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                      inputMode="decimal"
                    />
                  </div>
                  {errors[`ticketPrice_${index}`] && (
                    <span style={errorText}>{errors[`ticketPrice_${index}`]}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="e.g. 100"
                    style={{
                      ...quantityInput,
                      ...(errors[`ticketQuantity_${index}`] ? errorInput : {})
                    }}
                    value={ticket.quantity}
                    onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
                    inputMode="numeric"
                  />
                  {errors[`ticketQuantity_${index}`] && (
                    <span style={errorText}>{errors[`ticketQuantity_${index}`]}</span>
                  )}
                </div>
                {eventData.tickets.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTicket(index)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#e74c3c',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      padding: '12px 10px',
                    }}
                    title="Remove ticket type"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                )}
              </div>
            ))}

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <button 
                style={{...categoryButton, width: '220px'}}
                onClick={addNewTicket}
              >
                <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
                Add Another Ticket Type
              </button>
            </div>
          </div>
        );

      case 4:
        const totalTickets = eventData.tickets.reduce((sum, ticket) => {
          const quantity = parseInt(ticket.quantity) || 0;
          return sum + quantity;
        }, 0);

        return (
          <div style={formSection}>
            <div style={reviewCard}>
              <div style={reviewIcon}>
                <i className="fas fa-paper-plane"></i>
              </div>
              <h2 style={reviewTitle}>Submit for Admin Review</h2>
              <p style={reviewText}>
                Your event has been saved as a draft. Submit it for admin review to make it visible to attendees.
              </p>
              
              <div style={eventSummary}>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Event Name:</span>
                  <span style={summaryValue}>{eventData.name || 'Not provided'}</span>
                </div>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Category:</span>
                  <span style={summaryValue}>{eventData.category || 'Not selected'}</span>
                </div>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Event Image:</span>
                  <span style={summaryValue}>
                    {eventImage ? '✓ Uploaded' : 'Not uploaded'}
                  </span>
                </div>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Date:</span>
                  <span style={summaryValue}>{eventData.date || 'Not set'}</span>
                </div>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Time:</span>
                  <span style={summaryValue}>{eventData.time || 'Not set'}</span>
                </div>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Location:</span>
                  <span style={summaryValue}>{eventData.location || 'Not provided'}</span>
                </div>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Total Available Tickets:</span>
                  <span style={summaryValue}>{totalTickets}</span>
                </div>
                <div style={summaryItem}>
                  <span style={summaryLabel}>Ticket Types:</span>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
                    {eventData.tickets.map((ticket, index) => (
                      <div key={index} style={{ fontSize: '0.9rem' }}>
                        {ticket.name || `Ticket ${index + 1}`}: 
                        <span style={{ fontWeight: '600', marginLeft: '5px' }}>
                          {ticket.price ? `ETB ${parseFloat(ticket.price).toFixed(2)}` : 'Free'} 
                          {ticket.quantity ? ` (${ticket.quantity} available)` : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={adminNote}>
                <div style={noteTitle}>
                  <i className="fas fa-info-circle"></i>
                  Important Note
                </div>
                <p style={noteText}>
                  After submission, your event will be reviewed by our admin team within 24-48 hours. 
                  You'll receive a notification once it's approved. Events must comply with our community guidelines.
                </p>
              </div>

              <button 
                style={submitButton}
                onClick={() => {
                  // In a real app, you would upload the image to a server here
                  // For now, we'll just show a success message
                  
                  const formData = new FormData();
                  if (eventImage) {
                    formData.append('image', eventImage);
                  }
                  formData.append('eventData', JSON.stringify(eventData));
                  
                  setEventData({...eventData, status: 'submitted'});
                  alert('Event submitted for admin review! You will be notified once it\'s approved.');
                  
                  // Reset form or redirect
                  // setTimeout(() => {
                  //   window.location.href = '/discover';
                  // }, 2000);
                }}
              >
                <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i>
                Submit for Review
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={createEventPage}>
      <div style={pageHeader}>
        <div style={headerContent}>
          <h1 style={pageTitle}>Create Your Event</h1>
          <p style={pageSubtitle}>
            Reach the right audience and sell tickets online in minutes
          </p>
        </div>
      </div>
      
      <div style={container}>
        {/* Progress Steps */}
        <div style={stepsContainer}>
          <div style={stepsLine}></div>
          <div style={{...progressLine, width: `${calculateProgress()}%`}}></div>
          {steps.map((step) => (
            <div key={step.number} style={stepItem}>
              <div style={{
                ...stepCircle,
                ...(activeStep > step.number ? completedStepCircle :
                    activeStep === step.number ? activeStepCircle : inactiveStepCircle)
              }}>
                {activeStep > step.number ? (
                  <i className="fas fa-check"></i>
                ) : (
                  step.number
                )}
              </div>
              <div style={{
                ...stepLabel,
                ...(activeStep > step.number ? completedStepLabel :
                    activeStep === step.number ? activeStepLabel : {})
              }}>
                {step.label}
              </div>
            </div>
          ))}
        </div>

        <div style={sectionDivider}></div>

        {/* Step Content */}
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div style={buttonContainer}>
          {activeStep > 1 && (
            <button
              style={backButton}
              onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
            >
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
              Back
            </button>
          )}
          
          {activeStep < steps.length ? (
            <button
              style={nextButton}
              onClick={handleNext}
            >
              {activeStep === 1 ? 'Next: Details' : 
               activeStep === 2 ? 'Next: Tickets' : 
               'Next: Review & Submit'}
              <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </button>
          ) : (
            <div style={{ flex: 1 }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;