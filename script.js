// document.getElementById('resumeForm').addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());

     
//     alert('Generating your resume...');

    
//     const response = await fetch('AIzaSyDJKIRzWgLGgYdANAY0Kabwxd2xMlgwQzk', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });

//     if (response.ok) {
//         const result = await response.json();
        
//         alert('Your resume has been generated successfully!\n' + result.resumeText);
//     } else {
//         alert('Failed to generate resume. Please try again later.');
//     }
// });