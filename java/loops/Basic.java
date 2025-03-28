package loops;
import java.util.Scanner;
public class Basic {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(" Enter a number ");
        int n = sc.nextInt();
        for(int i=0; i<=100; i++){
        System.out.println(n+" * "+i+" = "+i*n);
        }
    }
}
