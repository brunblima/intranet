import React, { useState, useEffect } from "react";
import CustomAlert from "../../Alert";
import Loading from "../../Animation/Loading";
import ImageCarousel from "../../Controllers/ImageCarousel";

import { sendOrderData } from "../../../utils/sendOrderData";
import {
  ModalOverlay,
  ModalContent,
  Form,
  Container,
  Title,
  Selector,
  Option,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  ButtonClose,
  FileInput,
  FileInputButton,
  ContainerCarousel,
} from "./styles";

import { db } from "../../../config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import { FaRegImage } from "react-icons/fa6";

function OrderForm({ isOpen, onClose }) {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [location, setLocation] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [remoteAccess, setRemoteAccess] = useState("");
  const [description, setDescription] = useState("");

  const [typeService, setTypeService] = useState("");
  const [type, setType] = useState([]);
  const [deviceType, setDeviceType] = useState([]);
  const [devices, setDevices] = useState([]);
  const [sectors, setSectors] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleNewOrder = async () => {
    await sendOrderData({
      typeService,
      selectedType,
      selectedDevice,
      remoteAccess,
      description,
      location,
      selectedSector,
      selectedImages,
      onClose,
      setIsLoading,
      setShowAlert,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setIsLoading(false);
    onClose();
  };

  const getDeviceData = async (selectedType, selectedSector) => {
    if (selectedType && selectedSector) {
      try {
        let deviceCollection;

        if (selectedType !== "Impressora") {
          deviceCollection = collection(db, selectedType);
          const snapshot = await getDocs(
            query(deviceCollection, where("setor", "==", selectedSector))
          );

          const devicesData = snapshot.docs.map((doc) => ({
            label: doc.id,
            value: doc.id,
          }));

          setDevices(devicesData);
        } else {
          deviceCollection = collection(db, selectedType);
          const snapshot = await getDocs(deviceCollection);

          const devicesData = snapshot.docs.map((doc) => ({
            label: doc.id,
            value: doc.id,
          }));

          setDevices(devicesData); // Definindo os dispositivos no estado
        }
      } catch (error) {
        console.error("Error getting devices:", error);
      }
    }
  };

  const getDeviceTypeData = async () => {
    await getDocs(collection(db, "deviceType")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDeviceType(newData);
    });
  };

  const getSectorData = async () => {
    await getDocs(collection(db, "Setor")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSectors(newData);
    });
  };

  const getTypesData = async () => {
    await getDocs(collection(db, "Type")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setType(newData);
    });
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  useEffect(() => {
    getSectorData();
    getTypesData();
    getDeviceTypeData();
    getDeviceData(selectedType, selectedSector);
  }, [selectedType, selectedSector]);

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <Form onSubmit={handleSubmit}>
              {isLoading && <Loading size="50px" />}
              <Title>Abrir Chamado de Suporte</Title>

              <Container>
                <Selector
                  value={typeService}
                  onChange={(e) => setTypeService(e.target.value)}
                >
                  <Option label="Selecione o tipo" value="" key={"default"} />
                  {type.map((item, index) => (
                    <Option
                      key={index.id}
                      label={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </Option>
                  ))}
                </Selector>
              </Container>

              <Container>
                <Selector
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                >
                  <Option
                    label="Selecione o setor"
                    value=""
                    key="defaultSector"
                  />
                  {sectors.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.id}
                    </Option>
                  ))}
                </Selector>
              </Container>

              {typeService === "Dispositivo" && (
                <Container>
                  <Selector
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <Option
                      label="Selecione o tipo do Dispositivo"
                      value=""
                      key="defaultDeviceType"
                    />
                    {deviceType.map((item, index) => (
                      <Option
                        key={index.id}
                        label={item.label}
                        value={item.label}
                      >
                        {item.label}
                      </Option>
                    ))}
                  </Selector>
                </Container>
              )}

              {typeService === "Dispositivo" && (
                <Container>
                  <Selector
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                  >
                    <Option
                      label="Selecione o Dispositivo"
                      value=""
                      key="defaultDevice"
                    />
                    {devices.map((item, index) => (
                      <Option
                        key={index.id}
                        label={item.label}
                        value={item.value}
                      >
                        {item.label}
                      </Option>
                    ))}
                  </Selector>
                </Container>
              )}

              {typeService === "Dispositivo" &&
              (selectedType === "Computador" || selectedType === "Celular") ? (
                <Container>
                  <Input
                    type="number"
                    value={remoteAccess}
                    placeholder="Acesso remoto"
                    onChange={(e) => setRemoteAccess(e.target.value)}
                  />
                </Container>
              ) : null}

              <Container>
                <TextArea
                  value={description}
                  placeholder="Descrição"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Container>
              <Container>
                <Input
                  type="string"
                  value={location}
                  placeholder="Local/Sala"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Container>

              <Container>
                <FileInputButton htmlFor="fileInput">
                  <FaRegImage size={20} /> Adicionar Imagem
                </FileInputButton>
                <FileInput
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                />
              </Container>

              <ContainerCarousel>
                <ImageCarousel
                  selectedImages={selectedImages}
                  handleRemoveImage={handleRemoveImage}
                />
              </ContainerCarousel>

              <ButtonContainer>
                <ButtonClose type="button" onClick={onClose}>
                  Fechar
                </ButtonClose>
                <Button
                  type="submit"
                  disabled={isLoading}
                  onClick={handleNewOrder}
                >
                  Adicionar Chamado
                </Button>
              </ButtonContainer>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
      {showAlert && (
        <CustomAlert
          title="Chamado aberto com sucesso!"
          message="Seu chamado foi registrado com sucesso."
          onClose={() => {
            setShowAlert(false);
            onClose();
          }}
        />
      )}
    </>
  );
}

export default OrderForm;
