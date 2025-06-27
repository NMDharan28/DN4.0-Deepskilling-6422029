BEGIN
  FOR rec IN (
    SELECT c.customer_id, l.loan_id
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE c.age > 60
  ) LOOP
    UPDATE loans
    SET interest_rate = interest_rate - 1
    WHERE loan_id = rec.loan_id;
  END LOOP;
  COMMIT;
END;
BEGIN
  FOR rec IN (
    SELECT customer_id
    FROM customers
    WHERE balance > 10000
  ) LOOP
    UPDATE customers
    SET IsVIP = 'TRUE'
    WHERE customer_id = rec.customer_id;
  END LOOP;
  COMMIT;
END;
SET SERVEROUTPUT ON;

BEGIN
  FOR rec IN (
    SELECT c.name, l.due_date
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan for ' || rec.name || ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;