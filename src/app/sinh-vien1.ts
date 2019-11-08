export class SinhVien1 {
    constructor(
        public id: number,
        public name: string,
        public addrect: string,
        public sex: string,
        public dob: string,
        public cmnd: number,
        public faculty: {
            id: number,
            name: string,
        },
        public mainfaculty: {
            id: number,
            name: string,
            parentId: number
        }) { }
}