var sumit = {
    dbId: 12,
    email: "skm@gm.com",
    userId: 12,
    startTrail: function () {
        return "trial started";
    },
    getCoupon: function (name, value) {
        return value * 10;
    }
};
sumit.email = "code@mail.com";
console.log(sumit);
