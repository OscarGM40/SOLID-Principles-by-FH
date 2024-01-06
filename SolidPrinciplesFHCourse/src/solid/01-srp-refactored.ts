(() => {
  interface Aggregate {
    id: number | string;
  }
  interface Product extends Aggregate {
    name: string;
  }

  class ProductService {
    // obviamente no sería unknown
    // con pasar el modificador de acceso ya me ahorro definir una prop como campo de clase??
    constructor(private readonly httpAdapter: unknown) {}

    getProduct(id: Product["id"]): Product | null {
      console.log(id);
      return {} as Product;
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    // lo suyo seria recibir el email,los destinatarios,etc
    constructor(readonly email: string, public receivers: any[]) {}
    static notifyClients<T extends Aggregate>(item: T) {
      // aqui tendria acceso al email,lo receivers,etc
      console.log("Enviando correo a los clientes", item.id);
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    static onAddToCart<T extends Aggregate>(productId: T["id"]) {
      console.log("Agregando al carrito por Id ", productId);
    }
  }

  const product: Product = {
    id: 10,
    name: "OLED TV",
  };

  // aqui iria la inyeccion del fetcher
  const productService = new ProductService("inyectando el fetcher");
  productService.getProduct(10);
  productService.saveProduct(product);
  Mailer.notifyClients(product);
  CartBloc.onAddToCart(10);
})();
