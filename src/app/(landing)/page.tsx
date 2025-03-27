"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Settings,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="mb-6 text-3xl font-bold md:text-5xl">
              Cardápios digitais para restaurantes,
              <br />
              <span className="text-yellow-400">GRÁTIS E SEM COMISSÃO!</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
              Automatize seu restaurante com um cardápio digital moderno e
              profissional. Aumente suas vendas e melhore a experiência dos seus
              clientes.
            </p>
            <div className="flex gap-4">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-blue-900 hover:bg-yellow-500"
                >
                  Começar Gratuitamente <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Benefícios do nosso cardápio digital
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center rounded-lg p-6 text-center"
              >
                <benefit.icon className="mb-4 h-12 w-12 text-blue-500" />
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Funcionalidades completas para seu negócio
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <feature.icon className="mb-4 h-8 w-8 text-blue-500" />
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">
              Comece a usar agora mesmo!
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Cadastre-se gratuitamente e transforme seu negócio
            </p>
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-500"
              >
                Criar Cardápio Digital Grátis
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    icon: Smartphone,
    title: "Cardápio Digital Moderno",
    description:
      "Interface intuitiva e responsiva para melhor experiência do cliente",
  },
  {
    icon: Settings,
    title: "Fácil Gerenciamento",
    description: "Atualize produtos e preços em tempo real sem complicação",
  },
  {
    icon: Star,
    title: "Totalmente Gratuito",
    description: "Sem mensalidades ou comissões sobre suas vendas",
  },
];

const features = [
  {
    icon: Clock,
    title: "Pedidos em Tempo Real",
    description: "Receba e gerencie pedidos instantaneamente",
  },
  {
    icon: DollarSign,
    title: "Controle Financeiro",
    description: "Acompanhe suas vendas e faturamento",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Cadastro e histórico de pedidos dos clientes",
  },
  {
    icon: CheckCircle2,
    title: "Categorias Personalizadas",
    description: "Organize seu cardápio do seu jeito",
  },
  {
    icon: Smartphone,
    title: "QR Code Integrado",
    description: "Gere QR Codes para suas mesas automaticamente",
  },
  {
    icon: Settings,
    title: "Personalização Completa",
    description: "Adapte o visual às cores da sua marca",
  },
];

export default HomePage;
