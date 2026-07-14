import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import './echo';

window.Echo.channel('students')
    .listen('.student.created', (e) => {
        const alertBox = document.getElementById('student-alert');
        const tableBody = document.getElementById('student-table');

        if(alertBox) {
            alertBox.innerHTML = '<div class="alert alert-success">New Student added: '
        }

        if(tableBody) {
            tableBody.insertAdjacentHTML('afterBegin', 
                '<tr>' +
                    '<td>' + e.first_name + '</td>' +
                    '<td>' + e.last_name + '</td>' +
                    '<td>' + e.email + '</td>' +
                    '<td>' + e.student_number + '</td>' +
                    '<td>' + e.year_level + '</td>' +
                    '<td>' + e.course + '</td>' +
                    '<td></td>' +
                '</tr>'
            );
        }
    });
