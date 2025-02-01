import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserDataByEmail } from "@/app/(pages)/user-home/hooks/useUserDataByEmail";
import { Loader2 } from "lucide-react";
import { RenderIf } from "@/components/commom/RenderIf";
import { useAddMember } from "../../hooks/useAddMember";
import { useRolesData } from "../../hooks/useRolesData";
import { Role } from "../../interfaces/role.interface";
import { Label } from "@/components/ui/label";

export const AddMemberCard = ({ boardId }: { boardId: number }) => {

  const [email, setEmail] = useState("");
  const [typing, setIsTyping] = useState(false);
  
  const { data: user, isLoading } = useUserDataByEmail({ email });
  const { data: roles, isLoading: isLoadingRoles } = useRolesData();

  const [role, setRole] = useState<Role | null>(null);
  const { mutate, isPending } = useAddMember();

  useEffect(() => {
    if (roles && roles.length > 0) {
      const defaultRole = roles.find((r) => r.description === "Visualizador") || roles[0];
      setRole(defaultRole);
    }
  }, [roles]);

  const handleAssign = () => {
    if (!user || !role) return;

    mutate({
      body: {
        roleId: role.id,
        userId: user.id,
      },
      boardId,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <p>+ Membro</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar membro</DialogTitle>
          <DialogDescription>
            Digite o e-mail da pessoa que você quer adicionar como membro
          </DialogDescription>
        </DialogHeader>

        <Input
          type="email"
          placeholder="Digite o e-mail..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsTyping(true);
          }}
        />

        <RenderIf shouldRender={isLoading}>
          <RenderIf shouldRender={typing}>
            <p>
              <Loader2 className="animate-spin" /> Buscando usuário
            </p>
          </RenderIf>
        </RenderIf>

        <RenderIf shouldRender={!isLoading}>
          {user ? (
            <div className="flex flex-col items-center gap-2 mt-2">
              <p className="text-xl">Usuário encontrado: {user.name}</p>
              <Label htmlFor="role">Nível escolhido</Label>
              <select
                id="role"
                value={role?.id || ""}
                onChange={(e) => {
                  const selectedRole = roles?.find((r) => r.id === Number(e.target.value));
                  setRole(selectedRole || null);
                }}
                className="shadow p-2 border border-emerald-100 rounded"
                disabled={isLoadingRoles}
              >
                {isLoadingRoles ? (
                  <option>Carregando níveis...</option>
                ) : (
                  roles?.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.description}
                    </option>
                  ))
                )}
              </select>
              <Button onClick={handleAssign} disabled={isPending}>
                {isPending ? <Loader2 className="animate-spin" /> : "Adicionar à board"}
              </Button>
            </div>
          ) : (
            <p className="text-red-500">Usuário não encontrado.</p>
          )}
        </RenderIf>
      </DialogContent>
    </Dialog>
  );
};
