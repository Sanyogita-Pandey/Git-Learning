
import java.util.Scanner;
public class addition {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print(" Enter firstnumber : ");
        int firstnumber = sc.nextInt();
        System.out.print(" Enter secondnumber : ");
        int secondnumber = sc.nextInt();
        int result = firstnumber + secondnumber ;
        System.out.print(" Sum of the numbers is : ");
        System.out.println(result);
    }
    
}
