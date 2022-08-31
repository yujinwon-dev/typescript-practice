function getStudentDetail(studentId) {
    return {
        studentId: 123456,
        studentName: 'Mark',
        // age: 20,
        gender: 'female',
        subject: 'TypeScript',
        courseCompleted: true
    };
}
function saveStudentDetail(student) {
    // student.studentId = 121212; // 읽기 전용 속성이므로 'studentId'에 할당할 수 없습니다.
}
saveStudentDetail({
    studentId: 123456,
    studentName: 'Janet',
    gender: 'female',
    subject: 'Node JS',
    courseCompleted: true
});
