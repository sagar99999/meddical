// specialties
export const specialties = ["neurology", "bones", "oncology", "otorhinolaryngology", ,
    "opthalmology", "cadiovascular", "pulmonology", "renal medicine",
    "gastroenterology", "urology", "dermatology", "gynaecology"
] as const;

// schedule hours
export const scheduleHours = [
    {
        day: "monday",
        startTime: "09",
        endTime: "07",
        closed: false
    },
    {
        day: "tuesday",
        startTime: "09",
        endTime: "07",
        closed: false
    },
    {
        day: "wednesday",
        startTime: "09",
        endTime: "07",
        closed: false
    },
    {
        day: "thursday",
        startTime: "09",
        endTime: "07",
        closed: false
    },
    {
        day: "friday",
        startTime: "09",
        endTime: "07",
        closed: false
    },
    {
        day: "saturday",
        startTime: "09",
        endTime: "07",
        closed: false
    },
    {
        day: "sunday",
        startTime: "09",
        endTime: "07",
        closed: true
    },
] as const