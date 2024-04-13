import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

export interface MemberModalProps {
  text: string;
  classNameTextMore: string;
  setIsModalOpen: (isOpen: boolean) => void;
  setModalId: (modalId: number) => void;
  nameMember: string;
}

const MemberModal: FunctionComponent<MemberModalProps> = ({ text, classNameTextMore, setIsModalOpen, nameMember }) => (
	<motion.div
		className="modal"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1, transition: { duration: 0.3 } }}
		exit={{ opacity: 0, transition: { duration: 3 } }}
		onClick={() => setIsModalOpen(false)}
	>
		<button className="modal-close" type="button" onClick={() => setIsModalOpen(false)}>
      X <span className="span-close">fermer</span>
		</button>
		<div className="modal-text">
			<p className={classNameTextMore} style={{ whiteSpace: "pre-wrap" }}>
				{text}
			</p>
			<h3 className="member-name bold">{nameMember}</h3>
		</div>
	</motion.div>
);

export default MemberModal;
