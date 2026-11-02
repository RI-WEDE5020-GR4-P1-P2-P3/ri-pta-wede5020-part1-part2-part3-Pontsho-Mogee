// Ink & Thread Studio - enquiry form validation and response
// Beginner style: plain functions, direct index access, no libraries.

// Display names for each product value used in the select box
var PRODUCT_NAMES = {
    tshirt: 'Custom T-Shirt',
    tote: 'Tote Bag',
    artwork: 'Personalised Artwork',
    event: 'Event Merchandise',
    business: 'Business Merchandise'
};

// EXAMPLE prices in rand per item. Replace these with the studio's real prices.
// A price of 0 means the item is quoted individually.
var PRICES = {
    tshirt: 300,
    tote: 180,
    artwork: 200,
    event: 0,
    business: 0
};

// EXAMPLE lead times in working days from design approval. Replace with real times.
var LEAD_TIMES = {
    tshirt: 5,
    tote: 5,
    artwork: 3,
    event: 10,
    business: 10
};

// Every field on the enquiry form. Each one has a matching "<name>-error" span in the HTML.
var FIELD_NAMES = ['fullname', 'email', 'phone', 'enquiry-type', 'product', 'quantity', 'date-needed', 'message'];

// Shows an error message next to a field (pass an empty string to clear it)
function showError(fieldName, text) {
    var errorBox = document.getElementById(fieldName + '-error');
    errorBox.textContent = text;
}

// Clears all error messages before we validate again
function clearErrors() {
    for (var i = 0; i < FIELD_NAMES.length; i++) {
        showError(FIELD_NAMES[i], '');
    }
}

// Checks every field. Returns true if the form is valid, false otherwise
function validateEnquiry() {
    var valid = true;
    clearErrors();

    var fullname = document.getElementById('fullname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.replace(/[\s\-]/g, '');
    var enquiryType = document.getElementById('enquiry-type').value;
    var product = document.getElementById('product').value;
    var quantityText = document.getElementById('quantity').value;
    var dateValue = document.getElementById('date-needed').value;
    var message = document.getElementById('message').value.trim();

    // Full name: at least 2 characters
    if (fullname.length < 2) {
        showError('fullname', 'Please enter your full name.');
        valid = false;
    }

    // Email: something@something.something
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
    }

    // Phone: South African number, 10 digits starting with 0 (spaces and dashes are removed first)
    var phonePattern = /^0\d{9}$/;
    if (!phonePattern.test(phone)) {
        showError('phone', 'Enter a 10-digit South African number, for example 013 567 0088.');
        valid = false;
    }

    // The enquiry type must be chosen
    if (enquiryType === '') {
        showError('enquiry-type', 'Please choose what your enquiry is about.');
        valid = false;
    }

    // Cost and availability enquiries need a product and a quantity
    if (enquiryType === 'cost' || enquiryType === 'availability') {
        if (product === '') {
            showError('product', 'Please choose a product.');
            valid = false;
        }

        var quantity = parseInt(quantityText, 10);
        if (isNaN(quantity) || quantity < 1) {
            showError('quantity', 'Please enter a quantity of 1 or more.');
            valid = false;
        }
    }

    // Volunteer and sponsor enquiries need a short message explaining the offer
    if (enquiryType === 'volunteer' || enquiryType === 'sponsor') {
        if (message.length < 10) {
            showError('message', 'Please tell us a little about how you would like to help (at least 10 characters).');
            valid = false;
        }
    }

    // Message length limit for all enquiry types
    if (message.length > 500) {
        showError('message', 'Please keep your message to 500 characters or fewer.');
        valid = false;
    }

    // The date needed cannot be in the past (dates are compared as local midnight)
    if (dateValue !== '') {
        var chosenDate = new Date(dateValue);
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosenDate < today) {
            showError('date-needed', 'The date needed cannot be in the past.');
            valid = false;
        }
    }

    return valid;
}

// Shows the response box with the given text
function showResponse(text) {
    document.getElementById('response-text').textContent = text;
    document.getElementById('enquiry-response').hidden = false;
}

// Runs when the enquiry form is submitted
function handleEnquirySubmit(event) {
    // Stop the page from reloading so we can show the response
    event.preventDefault();

    // Hide any old response, then check the form
    document.getElementById('enquiry-response').hidden = true;
    if (!validateEnquiry()) {
        return;
    }

    var enquiryType = document.getElementById('enquiry-type').value;
    var product = document.getElementById('product').value;
    var quantity = parseInt(document.getElementById('quantity').value, 10);
    var text = '';

    if (enquiryType === 'cost') {
        var unitPrice = PRICES[product];
        var productName = PRODUCT_NAMES[product];

        if (unitPrice === 0) {
            text = 'Thank you. ' + productName + ' prices depend on the design and size, so we will email you a personal quote within 2 working days.';
        } else {
            var total = unitPrice * quantity;
            text = 'Estimated cost: ' + quantity + ' x ' + productName + ' at R' + unitPrice + ' each, R' + total + ' in total. We will confirm the final price by email.';
        }
    } else if (enquiryType === 'availability') {
        text = 'We can usually produce ' + quantity + ' x ' + PRODUCT_NAMES[product] + ' within ' + LEAD_TIMES[product] + ' working days of approving the design. We will confirm the exact timing by email.';
    } else if (enquiryType === 'volunteer') {
        text = 'Thank you for offering to volunteer with us. Our team will contact you by email.';
    } else {
        text = 'Thank you for your interest in sponsoring Ink & Thread Studio. Our team will contact you by email.';
    }

    showResponse(text);
}

// Connect the function to the form, but only on pages that have this form
var enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm !== null) {
    enquiryForm.addEventListener('submit', handleEnquirySubmit);
}