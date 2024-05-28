import React, { useState, useEffect } from "react";
import { BirthdayCardWrapper, Image, Title, CarouselItem } from "./styles";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const BirthdayCard = () => {
  const [birthdayUsers, setBirthdayUsers] = useState([]);
  const [currentBirthdayIndex, setCurrentBirthdayIndex] = useState(0);

  useEffect(() => {
    const fetchBirthdays = async () => {
      const today = new Date();
      const month = today.getMonth() + 1;

      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);

      const birthdayUsers = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const birthday = new Date(data.birthday);
        if (birthday.getMonth() + 1 === month) {
          birthdayUsers.push({
            username: data.username,
            day: birthday.getDate(),
          });
        }
      });

      setBirthdayUsers(birthdayUsers);
    };

    fetchBirthdays();
  }, []);

  useEffect(() => {
    if (birthdayUsers.length > 0) {
      const interval = setInterval(() => {
        setCurrentBirthdayIndex(
          (prevIndex) => (prevIndex + 1) % birthdayUsers.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [birthdayUsers]);

  const currentBirthday = birthdayUsers[currentBirthdayIndex];

  return (
    <BirthdayCardWrapper>
      <Image
        src={require("../../assets/imgFelizAniversario01.jpg")}
        alt="Aniversariantes do Mês"
      />
      <Title>Aniversariantes do Mês</Title>
      {currentBirthday ? (
        <CarouselItem>
          {`Dia ${currentBirthday.day} - ${currentBirthday.username}`}
        </CarouselItem>
      ) : (
        <CarouselItem>Não há aniversariantes este mês.</CarouselItem>
      )}
    </BirthdayCardWrapper>
  );
};

export default BirthdayCard;
