export const BASE_URL = "http://localhost:3000";


const MESSAGES = {
  ValidationError: 'You entered an incorrect username or password', //400
  JsonWebTokenError: 'User is not found', //401
  ConflictError: 'User already existПользователь с таким email уже существует',//409
  InternalServerError: 'An error occurred on the server', //500
  NotFound: 'Page is not found', // 404 

};

const persons = [
  {
    id: 1,
    name: "Евгения Савченко-Нелюбова-Незовибатько",
    telephone: "+7 (918) 078-17-05",
    mail: "yysavchenkyysavchenkyysavchenkyysavchenkyysavchenk@mail.ru",
    visitDate: "15.10.2020",
    jobTitle: "Дизайнер",
    department: "Трайб автоматизированных систем контактных центров",
    additionalInformation: `Разработчики используют текст в качестве заполнителя макта страницы. 
    Разработчики используют текст в качестве заполнителя макта страницы.`,
  },
  {
    id: 2,
    name: 'Евгения Савченко',
    telephone: "+7 (918) 078-17-05",
    mail: "yysavchenk@mail.ru",
    visitDate: "15.10.2020",
    jobTitle: "Дизайнер",
    department: "Трайб автоматизированных систем контактных центров",
    additionalInformation: `Разработчики используют текст в качестве заполнителя макта страницы. 
    Разработчики используют текст в качестве заполнителя макта страницы.`,
  },
  {
    id: 3,
    name: 'Евгения Савченко',
    telephone: "+7 (918) 078-17-05",
    mail: "yysavchenk@mail.ru",
    visitDate: "15.10.2020",
    jobTitle: "Дизайнер",
    department: "Трайб автоматизированных систем контактных центров",
    additionalInformation: `Разработчики используют текст в качестве заполнителя макта страницы. 
    Разработчики используют текст в качестве заполнителя макта страницы.`,
  },
  {
    id: 4,
    name: "Евгения Савченко-Нелюбова-Незовибатько",
    telephone: "+7 (918) 078-17-05",
    mail: "yysavchenkyysavchenkyysavchenkyysavchenkyysavchenk@mail.ru",
    visitDate: "15.10.2020",
    jobTitle: "Дизайнер",
    department: "Трайб автоматизированных систем контактных центров",

  },
  {
    id: 5,
    name: 'Евгения Савченко',
    telephone: "+7 (918) 078-17-05",
    mail: "yysavchenk@mail.ru",
    visitDate: "15.10.2020",
    jobTitle: "Дизайнер",
    department: "Трайб автоматизированных систем контактных центров",
    additionalInformation: `Разработчики используют текст в качестве заполнителя макта страницы. 
    Разработчики используют текст в качестве заполнителя макта страницы.`,
  },
  {
    id: 6,
    name: 'Евгения Савченко',
    telephone: "+7 (918) 078-17-05",
    mail: "yysavchenk@mail.ru",
    visitDate: "15.10.2020",
    jobTitle: "Дизайнер",
    department: "Трайб автоматизированных систем контактных центров",
    additionalInformation: `Разработчики используют текст в качестве заполнителя макта страницы. 
    Разработчики используют текст в качестве заполнителя макта страницы.`,
  },
]


export { MESSAGES, persons };