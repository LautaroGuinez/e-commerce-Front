import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserCartId } from "../state/user";
import Cars from "../common/cars";
import { useParams } from "react-router";

const ParentComponent = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    const assignCartToUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/cars/${userId}/cart`, {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          const { cartId } = data;
          dispatch(updateUserCartId({ userId, cartId }));
        } else {
          throw new Error("Error al asignar carrito al usuario");
        }
      } catch (error) {
        console.error("Error al asignar carrito al usuario:", error);
        // Manejar el error aquí si es necesario
      }
    };

    assignCartToUser();
  }, [dispatch, userId]);

  return <Cars />;
};

export default ParentComponent