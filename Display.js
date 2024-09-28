window.onload = function () {
    // Retrieve user details from localStorage
    const name = localStorage.getItem('name');
    const contact = localStorage.getItem('contact');
    const address = localStorage.getItem('address');
    const skills = localStorage.getItem('skills');
    const education = localStorage.getItem('education');
    const reference = localStorage.getItem('reference');
    const profilePicture = localStorage.getItem('profilePicture');

    // Populate the profile data in the HTML
    document.getElementById('displayName').textContent = name || 'No Name Provided';
    document.getElementById('displayContact').textContent = contact || 'No Contact Provided';
    document.getElementById('displayAddress').textContent = address || 'No Address Provided';
    document.getElementById('displaySkills').textContent = skills || 'No Skills Listed';
    document.getElementById('displayEducation').textContent = education || 'No Education Listed';
    document.getElementById('displayReference').textContent = reference || 'No Reference Provided';

    // Profile Picture
    if (profilePicture) {
        document.getElementById('profilePic').src = profilePicture;
    } else {
        document.getElementById('profilePic').alt = 'No Profile Picture Provided';
    }
};
